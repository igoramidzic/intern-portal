import { Team, TeamDocument } from "../../../models/team/team.model";

export let createNewTeam = (team: Team): Promise<TeamDocument> =>
    new Promise((resolve, reject) => {
        Team.create(team)
            .then(async (team: TeamDocument) => {
                resolve(team);
            })
            .catch((error: any) => {
                reject(error);
            });
    });

export let updateTeam = (teamId: string, team: Team): Promise<TeamDocument> =>
    new Promise((resolve, reject) => {
        Team.findOneAndUpdate({ _id: teamId }, team, { new: true })
            .then(async (team: TeamDocument) => {
                resolve(team);
            })
            .catch((error: any) => {
                reject(error);
            });
    });

export let deleteTeam = (teamId: string): Promise<TeamDocument> =>
    new Promise((resolve, reject) => {
        Team.findOneAndDelete({ _id: teamId })
            .then(async (team: TeamDocument) => {
                resolve(team);
            })
            .catch((error: any) => {
                reject(error);
            });
    });

export let getTeamById = (id: string): Promise<TeamDocument> =>
    new Promise((resolve, reject) => {
        Team.findOne({ _id: id }).populate({
            path: 'messages'
        })
            .then((team: TeamDocument) => {
                resolve(team);
            })
            .catch(error => {
                reject(error);
            })
    });

export let getTeamByName = (name: string): Promise<TeamDocument> =>
    new Promise((resolve, reject) => {
        Team.findOne({ name }).populate({
            path: 'messages'
        })
            .then((team: TeamDocument) => {
                resolve(team);
            })
            .catch(error => {
                reject(error);
            })
    });

export let getTeams = (companyId: string) =>
    new Promise<TeamDocument[]>(async (resolve, reject) => {
        try {
            Team.find({ company: companyId }).populate({
                path: 'teams'
            }).populate({
                path: 'messages'
            })
                .then((teams: TeamDocument[]) => {
                    resolve(teams)
                })
                .catch((e) => {
                    reject(e)
                })
        } catch (e) {
            reject(e)
        }
    });