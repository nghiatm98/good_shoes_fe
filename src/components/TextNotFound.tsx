import React from 'react'

interface ITextNotFoundProps {
  label?: string
}

export const TextNotFound = ({ label = 'Không có sản phẩm nào!' }: ITextNotFoundProps) => {
  return <span>{label}</span>
}
