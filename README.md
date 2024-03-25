# React + Vite

- react-hook-form (https://github.com/react-hook-form/react-hook-form) Se utilizó para hacer la validación del formulario de checkout, porque es un lugar muy importante, y esta librería ofrece la robustez necesaria para que sea confiable.
- zod (https://github.com/colinhacks/zod) Se utilizó para realizar la validación de tipos y la creación del schema de formulario de checkout.
- @hookform/resolvers (https://github.com/react-hook-form/resolvers) Librería recomendada por react-hook-form para utilizar zod como resolver en el hook useForm.
- tailwindcss (https://github.com/tailwindlabs/tailwindcss) Librería de javascript para estilar componentes, se utilizó en compañía de react-bootstrap para agilizar muchísimo el desarrollo.
- react-toastify (https://github.com/fkhadra/react-toastify) Librería de toasts utilizada para la notificación del checkout.

Es importante mencionar que, si bien, ciertos paquetes se utilizan muy poco en la aplicación, y sin duda podrían implementarse a mano, decido usarlos porque en un proyecto real de producción, serían indispensables y sería inviable (tanto en tiempo, como en esfuerzo) intentar implementar soluciones parecidas con el nivel de confianza que estas librerías ofrecen.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
