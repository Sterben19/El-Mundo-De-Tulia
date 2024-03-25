/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createOrder } from '../../firebase/utils/orders'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useCartContext } from './useCartContext'
import { CART_ACTIONS } from '../reducers/CartReducer'
import { Link } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
const Toast = ({ closeToast, id }) => (
  <Link to={`/order/${id}`}>Orden creada, puedes acceder dando click aquí</Link>
)

const formSchema = z
  .object({
    name: z.string().min(1, { message: 'El nombre es obligatorio.' }),
    lastname: z.string().min(1, { message: 'El apellido es obligatorio.' }),
    email: z.string().email({
      message: 'El email no es válido',
    }),
    confirm_email: z.string({ required_error: 'Confirma tu email.' }).email({
      message: 'El email no es válido',
    }),
    phone: z.string().min(1, { message: 'El teléfono es obligatorio.' }),
  })
  .superRefine(({ email, confirm_email }, ctx) => {
    if (email !== confirm_email) {
      ctx.addIssue({
        code: 'custom',
        message: 'Los emails no coinciden.',
        path: ['confirm_email'],
      })
    }
  })
  // eslint-disable-next-line no-unused-vars
  .transform(({ confirm_email, ...data }) => data)

export function useCartForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  })
  const { dispatch, state } = useCartContext()

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset()
    }
  }, [form.formState.isSubmitSuccessful])

  const onSubmit = form.handleSubmit(async (data) => {
    if (!state || state.length === 0) {
      return toast.error('No hay productos en el carrito.')
    }

    const id = await createOrder({ ...data, products: state }).then(
      (doc) => doc.id
    )
    toast(<Toast id={id} />, { autoClose: false })
    dispatch({ type: CART_ACTIONS.CLEAR })
  })

  return { form, onSubmit }
}
