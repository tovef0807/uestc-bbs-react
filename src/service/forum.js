import { post } from "./serve";

const forumlist = (params) => post("forum/forumlist", params);
const topiclist = (params) => post("forum/topiclist", params);
const postlist = (params) => post("forum/postlist", params);
const topicadmin = (params) => post("forum/topicadmin", params);
const search = (params) => post("forum/search", params);
const sendattachment = (params) => post("forum/sendattachment", params);
const sendattachmentex = (params) => post("forum/sendattachmentex", params);
const vote = (params) => post("forum/vote", params);
const support = (params) => post("forum/support", params);
const announcement = (params) => post("forum/announcement", params);
const atuserlist = (params) => post("forum/atuserlist", params);
const classification = (params) => post("forum/classification", params);
const photogallery = (params) => post("forum/photogallery", params);
const ratelistview = (params) => post("forum/ratelistview", params);
const topicactivity = (params) => post("forum/topicactivity", params);
const topicactivityview = (params) => post("forum/topicactivityview", params);
const topicadminview = (params) => post("forum/topicadminview", params);
const topicrate = (params) => post("forum/topicrate", params);

export {
  forumlist,
  topiclist,
  postlist,
  topicadmin,
  search,
  sendattachment,
  sendattachmentex,
  vote,
  support,
  announcement,
  atuserlist,
  classification,
  photogallery,
  ratelistview,
  topicactivity,
  topicactivityview,
  topicadminview,
  topicrate,
};
