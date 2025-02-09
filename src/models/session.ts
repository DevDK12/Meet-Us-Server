import mongoose from "mongoose";



export interface IParticipants {
    userId: string;
    name: string;
    socketId: string;
    photo: string;
    micOn: boolean;
    videoOn: boolean;
}

export interface ISession {
    sessionId: string;
    participants: IParticipants[];
    createdAt: Date;
}


const Schema = mongoose.Schema;



const SessionSchema = new Schema<ISession>({
    sessionId: { type: String, required: true, unique: true },
    participants: [
        {
            userId: { type: String, default: "" },
            name: { type: String, default: "" },
            socketId: { type: String, default: "" },
            photo: { type: String, default: "" },
            micOn: { type: Boolean, default: false },
            videoOn: { type: Boolean, default: false },
        },
    ],
    createdAt: { type: Date, default: Date.now, expires: "1d" },
});

const Session = mongoose.model<ISession>("Session", SessionSchema);


export default Session;