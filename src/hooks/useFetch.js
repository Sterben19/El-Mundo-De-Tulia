/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

export function useFetch({ func, dependencies = [], initialData = [] }) {
  // Helper para evitar repetir tanto codigo para tener loadings y errors
  // y no tener que instalar una dependencia tan grande como SWR o react-query

  const [state, setState] = useState({
    loading: false,
    error: null,
    data: initialData,
  })

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: true }))
    func(dependencies)
      .then((res) => {
        setState({ loading: false, error: null, data: res })
      })
      .catch((err) => {
        setState({ loading: false, error: err, data: initialData })
      })
  }, dependencies)

  return { ...state, setState }
}
