import { Form } from 'react-bootstrap'
import { uploadImage, uploadProduct } from '../../firebase/utils/products'
import categories from '../assets/categories.json'
import { useState } from 'react'

export function Upload() {
  const [selectedCategories, setselectedCategories] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const values = Object.fromEntries(new FormData(e.target).entries())
    const image = values.image
    const url = await uploadImage(image)

    const data = { ...values, image: url, categories: selectedCategories }

    uploadProduct(data).then(() => {
      alert('Product uploaded')
    })
  }
  const handleCategoryChange = (category) => {
    setselectedCategories((prev) => prev.concat(category.slug))
  }

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 max-w-[500px] mx-auto [&>input[type=text]]:p-2 [&>input[type=text]]:border [&>input[type=text]]:border-neutral-400"
      >
        <h1>Upload</h1>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="price" placeholder="Price" />
        <textarea rows={3} name="description" placeholder="Description" />

        <div className="flex flex-col">
          {categories.map((parentCategory) => {
            return (
              <>
                <Form.Check
                  key={parentCategory.slug}
                  type="checkbox"
                  onChange={(e) => {
                    const isAdding = e.target.checked
                    if (isAdding) handleCategoryChange(parentCategory)
                    else
                      setselectedCategories((prev) =>
                        prev.filter((slug) => slug !== parentCategory.slug)
                      )
                  }}
                  label={parentCategory.name}
                  value={parentCategory.slug}
                  className="mt-5"
                />
                {parentCategory.children.map((childCategory) => {
                  return (
                    <Form.Check
                      key={childCategory.slug}
                      type="checkbox"
                      onChange={(e) => {
                        const isAdding = e.target.checked
                        if (isAdding) handleCategoryChange(childCategory)
                        else
                          setselectedCategories((prev) =>
                            prev.filter((slug) => slug !== childCategory.slug)
                          )
                      }}
                      label={childCategory.name}
                      value={childCategory.slug}
                    />
                  )
                })}
              </>
            )
          })}
        </div>

        <input type="file" name="image" />

        <button>Upload</button>
      </form>
    </main>
  )
}
