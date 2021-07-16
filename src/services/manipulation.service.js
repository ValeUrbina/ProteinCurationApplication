import axios from "axios";

const API_URL = "http://ec2-3-218-86-203.compute-1.amazonaws.com:8000/";

const deleteleft_service = (project_name, pf_code, column, file_name, outputfile_name) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let col = 'column=' + column
    let fname = 'file_name=' + file_name
    let outname = 'outputfile_name=' + outputfile_name
    let params = pname + '&' + pfcode + '&' + col + '&' + fname + '&' + outname
    return axios
        .post(API_URL + 'deleteleft' + '/?' + params)
};

const deleteright_service = (project_name, pf_code, column, file_name, outputfile_name) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let col = 'column=' + column
    let fname = 'file_name=' + file_name
    let outname = 'outputfile_name=' + outputfile_name
    let params = pname + '&' + pfcode + '&' + col + '&' + fname + '&' + outname
    return axios
        .post(API_URL + 'deleteright' + '/?' + params)
};

const deletesequences_service = (project_name, pf_code, file_name, outputfile_name, acc_numbers_ids) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let fname = 'file_name=' + file_name
    let outname = 'outputfile_name=' + outputfile_name
    let params = pname + '&' + pfcode + '&' + fname + '&' + outname
    return axios
        .post(API_URL + 'deletesequences' + '/?' + params, acc_numbers_ids)
};

const deletefragments_service = (project_name, pf_code, file_name, outputfile_name) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let fname = 'file_name=' + file_name
    let outname = 'outputfile_name=' + outputfile_name
    let params = pname + '&' + pfcode + '&' + fname + '&' + outname
    return axios
        .post(API_URL + 'deletefragments' + '/?' + params)
};

const wholeseq_service = (project_name, pf_code, file_name, outputfile_name) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let fname = 'file_name=' + file_name
    let outname = 'outputfile_name=' + outputfile_name
    let params = pname + '&' + pfcode + '&' + fname + '&' + outname
    return axios
        .post(API_URL + 'wholeseq' + '/?' + params)
};

const efetch_service = (project_name, pf_code, accnumber) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let anumbr = 'accnumber=' + accnumber
    let params = pname + '&' + pfcode + '&' + anumbr
    return axios
        .post(API_URL + 'efetch' + '/?' + params)
};

const desc_service = (project_name, pf_code) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let params = pname + '&' + pfcode
    return axios
        .post(API_URL + 'desc' + '/?' + params)
};

const createalign_service = (project_name, pf_code, method, file_name, outputfile_name) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let meth = 'method =' + method
    let fname = 'file_name=' + file_name
    let outname = 'outputfile_name=' + outputfile_name
    let params = pname + '&' + pfcode + '&' + meth + '&' + fname + '&' + outname
    return axios
        .post(API_URL + 'createalign' + '/?' + params)
};

const extend_service = (project_name, pf_code, n, c, method, file_name, outputfile_name) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let n_value = 'n =' + n
    let c_value = 'c =' + c
    let meth = 'method =' + method
    let fname = 'file_name=' + file_name
    let outname = 'outputfile_name=' + outputfile_name
    let params = pname + '&' + pfcode + '&' + n_value + '&' + c_value + '&' + meth + '&' + fname + '&' + outname
    return axios
        .post(API_URL + 'extend' + '/?' + params)
};

const pfbuild_service = (project_name, pf_code) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let params = pname + '&' + pfcode
    return axios
        .post(API_URL + 'pfbuild' + '/?' + params)
};

const pmake_service = (project_name, pf_code, tmayus, tminus, e, outputfile_name) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let tmayus_value = 'tmayus=' + tmayus
    let tminus_value = 'tminus=' + tminus
    let e_value = 'e=' + e
    let outname = 'outputfile_name=' + outputfile_name
    let params = pname + '&' + pfcode + '&' + tmayus_value + '&' + tminus_value + '&' + e_value + '&' + outname
    return axios
        .post(API_URL + 'pmake' + '/?' + params)
};

const nextduf_service = (project_name, pf_code) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let params = pname + '&' + pfcode
    return axios
        .post(API_URL + 'nextduf' + '/?' + params)
};

const missing_service = (project_name, pf_code) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let params = pname + '&' + pfcode
    return axios
        .post(API_URL + 'missing' + '/?' + params)
};

const overlap_service = (project_name, pf_code) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let params = pname + '&' + pfcode
    return axios
        .post(API_URL + 'overlap' + '/?' + params)
};

const pfamoutput_service = (project_name, pf_code, evalue) => {
    let pname = 'project_name=' + project_name
    let pfcode = 'pf_code=' + pf_code
    let e_value = 'evalue=' + evalue
    let params = pname + '&' + pfcode + '&' + e_value
    return axios
        .post(API_URL + 'pfamoutput' + '/?' + params)
};

const exportar = {
    deleteleft_service,
    deleteright_service,
    deletesequences_service,
    deletefragments_service,
    wholeseq_service,
    efetch_service,
    desc_service,
    createalign_service,
    extend_service,
    pfbuild_service,
    pmake_service,
    nextduf_service,
    missing_service,
    overlap_service,
    pfamoutput_service,
}

export default exportar;