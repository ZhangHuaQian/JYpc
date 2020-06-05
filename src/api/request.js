import '@/utils/interception'
import { serverip as ip } from '@/utils/serverIP'
import axios from 'axios'
// import Qs from 'qs'

export function getList(name, data, jiekou) {
  if (!jiekou) {
    jiekou = '/selectList'
  }
  return axios({
    url: ip + name + jiekou,
    method: 'post',
    data: data
  })
}

export function insert(name, form, jiekou) {
  if (!jiekou) {
    jiekou = '/insert'
  }
  return axios({
    url: ip + name + jiekou,
    method: 'post',
    data: form
  })
}

export function update(name, data, jiekou) {
  if (!jiekou) {
    jiekou = '/update'
  }
  return axios({
    url: ip + name + jiekou,
    method: 'post',
    data: data
  })
}

export function select(name, data, jiekou) {
  if (!jiekou) {
    jiekou = '/select'
  }
  return axios({
    url: ip + name + jiekou,
    method: 'post',
    data: data
  })
}

export function Delete(name, id, jiekou) {
  if (!jiekou) {
    jiekou = '/delete'
  }
  return axios({
    url: ip + name + jiekou,
    method: 'post',
    data: { id }
  })
}

export function downloadFiles(url) {
  return axios({
    url: url,
    method: 'get',
    responseType: 'blob'
  })
}
