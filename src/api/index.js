
const baseUrl = "http://localhost:8080/social-api";

export const getAllUserNames=()=>fetch(`${baseUrl}/all-user`);
export const getMessageByUser=(userName)=>fetch(`${baseUrl}/message/${userName}`);
export const getfollowUser=(userName,following)=>fetch(`${baseUrl}/user/${userName}/${following}`);
export const postUserMessage=(data)=>fetch(`${baseUrl}/message`, { method: 'POST',  body: JSON.stringify(data), headers:{ 'Content-Type': 'application/json' }})
export const getTimelineMessage=(userName)=>fetch(`${baseUrl}/timeline/${userName}`);
