import api from '../axiosConfigs'

export default class IngredientService {
  prefix = 'ingredient'
  async getAll() {
    return await api.get(this.prefix)
  }
  async getFormatedList() {
    return await api.get(`${this.prefix}/formatedList`)
  }
  async create(ingredient) {
    return await api.post(this.prefix, ingredient)
  }
  async delete(id) {
    return await api.delete(`${this.prefix}/${id}`)
  }
  async update(id, name) {
    return await api.put(`${this.prefix}/${id}/${name}`)
  }
}
