const useEnv = () => {
  const svil = window.location.hostname;

  //let REACT_APP_SERVERAPI = "https://apis.axonasrl.com/";
  let REACT_APP_SERVERAPI = "https://apit.axonasrl.com/";
  let REACT_APP_CSSFOLDER = "https://svil.axonasrl.com/css";
  let REACT_APP_IMGFOLDER = "https://svil.axonasrl.com/img";
  let REACT_APP_TMPFOLDER = "https://svil.axonasrl.com/personal";
  let REACT_AZIENDA = "06087680960";

  if (svil.indexOf("192.168.2") > -1 || svil.indexOf("local") > -1) {
    REACT_APP_SERVERAPI = "https://apis.axonasrl.com/";
    REACT_APP_CSSFOLDER = "https://svil.axonasrl.com/css";
    REACT_APP_IMGFOLDER = "https://svil.axonasrl.com/img";
    REACT_APP_TMPFOLDER = "https://svil.axonasrl.com/personal";

    REACT_APP_SERVERAPI = "https://apit.axonasrl.com/";
    REACT_APP_CSSFOLDER = "https://seo.axonasrl.com/css";
    REACT_APP_IMGFOLDER = "https://seo.axonasrl.com/img";
    REACT_APP_TMPFOLDER = "https://seo.axonasrl.com/personal";

    REACT_AZIENDA = "06087680960";
  } else if (svil.indexOf("svil") > -1) {
    REACT_APP_SERVERAPI = "https://apis.axonasrl.com/";
    REACT_APP_CSSFOLDER = "https://svil.axonasrl.com/css";
    REACT_APP_IMGFOLDER = "https://svil.axonasrl.com/img";
    REACT_APP_TMPFOLDER = "https://svil.axonasrl.com/personal";
  } else if (svil.indexOf("rtest") > -1) {
    REACT_APP_SERVERAPI = "https://apir.axonasrl.com/";
    REACT_APP_CSSFOLDER = "https://rtest.axonasrl.com/css";
    REACT_APP_IMGFOLDER = "https://rtest.axonasrl.com/img";
    REACT_APP_TMPFOLDER = "https://rtest.axonasrl.com/personal";
  } else if (svil.indexOf("test") > -1) {
    REACT_APP_SERVERAPI = "https://apit.axonasrl.com/";
    REACT_APP_CSSFOLDER = "https://test.axonasrl.com/css";
    REACT_APP_IMGFOLDER = "https://test.axonasrl.com/img";
    REACT_APP_TMPFOLDER = "https://test.axonasrl.com/personal";
  } else if (svil.indexOf("vercel.app") > -1) {
    REACT_APP_SERVERAPI = "https://apit.axonasrl.com/";
    REACT_APP_CSSFOLDER = "https://test.axonasrl.com/css";
    REACT_APP_IMGFOLDER = "https://test.axonasrl.com/img";
    REACT_APP_TMPFOLDER = "https://test.axonasrl.com/personal";
  } else if (svil.indexOf("seo.") > -1) {
    REACT_APP_SERVERAPI = "https://apit.axonasrl.com/";
    REACT_APP_CSSFOLDER = "https://seo.axonasrl.com/css";
    REACT_APP_IMGFOLDER = "https://seo.axonasrl.com/img";
    REACT_APP_TMPFOLDER = "https://seo.axonasrl.com/personal";
  } else {
    REACT_APP_SERVERAPI = process.env.REACT_APP_SERVERAPI;
    REACT_APP_CSSFOLDER = "https://app.axonasrl.com/css";
    REACT_APP_IMGFOLDER = "https://app.axonasrl.com/img";
    REACT_APP_TMPFOLDER = "https://app.axonasrl.com/personal";
  }

  return {
    REACT_APP_SERVERAPI,
    REACT_APP_CSSFOLDER,
    REACT_APP_IMGFOLDER,
    REACT_APP_TMPFOLDER,
    REACT_AZIENDA,
  };
};
export default useEnv;
