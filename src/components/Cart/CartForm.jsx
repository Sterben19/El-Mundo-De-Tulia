import { Button, Form } from 'react-bootstrap'
import { useCartForm } from '../../hooks/useCartForm'
import { InputWithError } from '../Common/InputWithError'

export function CartForm() {
  const { form, onSubmit } = useCartForm()
  return (
    <Form onSubmit={onSubmit} className="flex flex-col gap-2">
      <InputWithError
        errors={form.formState.errors}
        {...form.register('name')}
        placeholder="Nombre"
      />
      <InputWithError
        errors={form.formState.errors}
        {...form.register('lastname')}
        placeholder="Apellido"
      />
      <InputWithError
        errors={form.formState.errors}
        {...form.register('email')}
        placeholder="Email"
      />
      <InputWithError
        errors={form.formState.errors}
        {...form.register('confirm_email')}
        placeholder="Confirmar email"
      />
      <InputWithError
        errors={form.formState.errors}
        {...form.register('phone')}
        placeholder="Teléfono"
      />
      <Button type="submit" variant="light">
        Comprar
      </Button>
    </Form>
  )
}
