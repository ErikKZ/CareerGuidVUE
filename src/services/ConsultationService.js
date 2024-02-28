export default {
  getConsultations() {
    return JSON.parse(localStorage.getItem('appointments')) || [];
  },

  hasConsultations() {
    const consultations = this.getConsultations();
    return consultations.length > 0;
  },
};