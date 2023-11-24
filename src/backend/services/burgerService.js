import api from '../axiosConfigs'

export default class IngredientService {
  prefix = 'burgerRequest'
  async getAll() {
    return await api.get(this.prefix)
  }
  async getTable() {
    return await api.get(`${this.prefix}/table`)
  }
  async create(burgerData) {
    return await api.post(this.prefix, burgerData)
  }
  async delete(id) {
    return await api.delete(`${this.prefix}/${id}`)
  }
  async update(id, burgerData) {
    return await api.put(`${this.prefix}/${id}`, burgerData)
  }
}
