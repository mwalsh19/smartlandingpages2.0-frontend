import http from "../http-common";
class LandingPagesDataService {
  getLandingPage(path, publisher, version) {    
    const token = `?api_token=${process.env.REACT_APP_TOKEN}`;
    if (version) {
      return http.get(`/landing-page/${path}/${publisher}/${version}${token}`);
    }
    return http.get(`/landing-page/${path}/${publisher}${token}`);
  }
  create(data) {
    console.log('dd', data);
    const token = `?api_token=${process.env.REACT_APP_TOKEN}`;
    return http.post(`/applicants${token}`, data);
  }
  get(id) {
    return http.get(`/tutorials/${id}`);
  }
  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }
  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }
  deleteAll() {
    return http.delete(`/tutorials`);
  }
  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}
export default new LandingPagesDataService();
