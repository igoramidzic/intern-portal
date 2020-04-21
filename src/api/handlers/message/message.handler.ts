import { Message } from "../../../models/message/message.model";
import { MessageDocument } from "../../../models/message/message.model";

export let createNewMessage = (message: Message): Promise<MessageDocument> =>
    new Promise((resolve, reject) => {
        Message.create(message)
            .then(async (message: MessageDocument) => {
                resolve(message);
            })
            .catch((error: any) => {
                reject(error);
            });
    });