import { Injectable } from '@angular/core';
import { ITeam } from 'src/app/core/models/team/team';
import { HttpClient } from '@angular/common/http';
import { APIs } from 'src/app/core/utils/api-urls';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private _teams: ITeam[];

  constructor(private http: HttpClient) { }

  getTeams(): Promise<ITeam[]> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.apiBase + APIs.Teams)
        .subscribe((teams: ITeam[]) => {
          this._teams = teams;
          resolve(teams);
        }, (err) => reject(err.error))
    })
  }

  updateTeam(team: ITeam): Promise<ITeam> {
    return new Promise((resolve, reject) => {
      this.http.put(environment.apiBase + APIs.Teams + "/" + team._id, team)
        .subscribe((team: ITeam) => {
          resolve(team);
        }, (err) => reject(err.error))
    })
  }

  deleteTeam(teamId: string): Promise<ITeam> {
    return new Promise((resolve, reject) => {
      this.http.delete(environment.apiBase + APIs.Teams + "/" + teamId)
        .subscribe((team: ITeam) => {
          this.removeTeamFromTeams(team);
          resolve(team);
        }, (err) => reject(err.error))
    })
  }

  addTeam(team: ITeam): Promise<ITeam> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.apiBase + APIs.Teams, team)
        .subscribe((team: ITeam) => {
          if (this._teams)
            this._teams.push(team)
          resolve(team);
        }, (err) => reject(err.error))
    })
  }

  private removeTeamFromTeams(team: ITeam): void {
    let index: number = this._teams.findIndex(t => t._id == team._id);
    if (index != -1)
      this._teams.splice(index, 1);
  }

  get teams(): ITeam[] {
    return this._teams;
  }
}
