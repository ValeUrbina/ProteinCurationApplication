import axios from "axios";

const API_URL = "http://ec2-3-218-86-203.compute-1.amazonaws.com:8000/";
//http://ec2-3-218-86-203.compute-1.amazonaws.com:8000/newproject/?curator_id=20160298&project_name=prueba2&email=valeurcas%40gmail.com&pfam_code=PF03377

const newproject_service = (curator_id, project_name, email, pfam_code) => {
    let cid = 'curator_id=' + curator_id
    let pname = 'project_name=' + project_name
    let mail = 'email=' + email
    let pfcode = 'pfam_code=' + pfam_code
    let params = cid + '&' + pname + '&' + mail + '&' + pfcode
    return axios
        .post(API_URL + 'newproject' + '/?' + params)
};

const getalign_service = (project_name, pf_code) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let params = pname + '&' + pfcode
    return axios
        .post(API_URL + 'getalign' + '/?' + params)
};

const pfnew_service = (project_name, accnumdir) => {
    let pname = 'project_name=' + project_name
    let anumdir = 'accnumdir=' + accnumdir
    let params = pname + '&' + anumdir
    return axios
        .post(API_URL + 'pfnew' + '/?' + params)
};

const pfci_service = (project_name, pf_code, options, description) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let options_value = 'options=' + options
    let description_value = 'description=' + description
    let params = pname + '&' + pfcode + '&' + options_value + '&' + description_value
    return axios
        .post(API_URL + 'pfci' + '/?' + params)
};

const returnfile_service = (project_name, pfam_code, file_name) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pfam_code=' + pfam_code
    let fname = 'file_name=' + file_name
    let params = pname + '&' + pfcode + '&' + fname
    return axios
        .post(API_URL + 'returnfile' + '/?' + params)
};

const sendemail_service = (project_name, operation_id, receiver_mail, pfam_code) => {
    let pname = 'project_name=' + project_name
    let oid = 'operation_id=' + operation_id
    let rmail = 'receiver_mail=' + receiver_mail
    let pfcode = 'pfam_code =' + pfam_code
    let params = pname + '&' + oid + '&' + rmail + '&' + pfcode
    return axios
        .post(API_URL + 'sendemail' + '/?' + params)
};

const exportar = {
    newproject_service,
    getalign_service,
    pfnew_service,
    pfci_service,
    returnfile_service,
    sendemail_service,
}

export default exportar;