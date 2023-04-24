import dayjs from "dayjs";
import ja from 'dayjs/locale/ja';
dayjs.locale(ja);

export default () => {
const dt = new dayjs();
const url = `https://chipper-selkie-4e0fa2.netlify.app/`;
const dataCommon = {
  "url":url,
  "auther":`composed by <a href="${url}" target="_blank">hiroweb</a>`,
  "dt": new dayjs()
};
return dataCommon;


}


