import { ICClose, ICHiddenPasswordPng, ICShowPasswordPng } from 'assets'
import { ERROR_MESSAGES, saveToken } from 'common'
import { Button, Input } from 'components'
import { ModalContext } from 'contexts'
import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthService } from 'services'
import * as Yup from 'yup'

const LoginPage = () => {
  const navigate = useNavigate()
  const { hideModal } = useContext(ModalContext)
  const [isShowPassword, setIsShowPassword] = useState(false)
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required(ERROR_MESSAGES.required),
      password: Yup.string().required(ERROR_MESSAGES.required)
    }),
    onSubmit: async (values) => {
      try {
        const { token } = await AuthService.login(values)
        saveToken(token)
        hideModal()
        navigate('/manager/products')
      } catch (error) {
      } finally {
      }
    }
  })

  const { handleChange, handleSubmit, setFieldValue, values, errors, touched } = formik

  return (
    <div className="bg-white relative flex flex-col justify-center items-center p-6 h-[800px] w-[800px] rounded-xl">
      <div className="cursor-pointer absolute top-6 right-6" onClick={hideModal}>
        <ICClose />
      </div>
      <div className=" text-center">
        <span className="text-_40 font-bold">Đăng nhập</span>
        <div className="mt-10 mb-8 flex flex-col gap-4">
          <Input
            label="User Name"
            removeAll
            required
            placeholder="Enter your user name"
            className="w-[420px]"
            name="username"
            onChange={handleChange}
            value={values.username}
            error={!!(errors.username && touched.username)}
            errorMessage={errors.username}
            onRemoveAll={() => setFieldValue('username', '')}
          />
          <Input
            label="Password"
            removeAll
            required
            placeholder="Enter your password"
            className="w-[420px]"
            icon={isShowPassword ? <img src={ICHiddenPasswordPng} /> : <img src={ICShowPasswordPng} />}
            onClickIcon={() => setIsShowPassword(!isShowPassword)}
            type={isShowPassword ? 'text' : 'password'}
            name="password"
            onChange={handleChange}
            value={values.password}
            error={!!(errors.password && touched.password)}
            errorMessage={errors.password}
            onRemoveAll={() => setFieldValue('password', '')}
          />
        </div>
        <Button type="submit" label="Đăng nhập" className="!rounded-lg !bg-_f0c !text-black w-full" onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default LoginPage
