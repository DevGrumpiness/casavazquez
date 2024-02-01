
import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient'

interface AdminProps {
}

export default function Admin({ }: AdminProps) {

  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const { data: fetchedData, error } = await supabase
      .from('table')
      .select()
    
    if (error) {
      console.log(error)
      return
    }

    setData(fetchedData)
  }

  async function createData(data: any) {
    const { error } = await supabase
      .from('table')
      .insert(data)

    if (error) {
      console.log(error)
      return
    }

    fetchData()
  }

  async function updateData(id: string, data: any) {
    const { error } = await supabase
      .from('table')
      .update(data)
      .eq('id', id)

    if (error) {
      console.log(error)
      return
    }

    fetchData()
  }

  async function deleteData(id: string) {
    const { error } = await supabase
      .from('table')
      .delete()
      .eq('id', id)

    if (error) {
      console.log(error)
      return
    }

    fetchData()
  }

  return (
    <div>
    </div>
  )

}