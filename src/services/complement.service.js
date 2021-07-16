import axios from "axios";

const API_URL = "http://ec2-3-218-86-203.compute-1.amazonaws.com:8000/";

const hmmer_service = (project_name, pf_code, file_name) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let fname = 'file_name=' + file_name
    let params = pname + '&' + pfcode + '&' + fname
    return axios
        .post(API_URL + 'hmmer' + '/?' + params)
};

const repeatsdb_service = (project_name, pfam_code, pdb_id) => {
    let pname = 'directory=' + project_name
    let pfcode = 'pfam_code=' + pfam_code
    let pdbid = 'pdb_id=' + pdb_id
    let params = pname + '&' + pfcode + '&' + pdbid
    return axios
        .post(API_URL + 'repeatsdb' + '/?' + params)
};

const reupred_service = () => {
    return axios
        .post(API_URL + 'reupred')
};

const spcleaner_service = (pfam_code, project_name, file_input_name, file_output_name) => {
    let pfcode = 'pfam_code=' + pfam_code
    let pname = 'project_name=' + project_name
    let inname = 'file_input_name=' + file_input_name
    let outname = 'file_output_name=' + file_output_name
    let params = pfcode + '&' + pname + '&' + inname + '&' + outname
    return axios
        .post(API_URL + 'spcleaner' + '/?' + params)
};

const exportar = {
    hmmer_service,
    repeatsdb_service,
    reupred_service,
    spcleaner_service,
}

export default exportar;