import React from 'react'

interface titleProps {
title: string
}

const Title = ({title}:titleProps) => {
  return (
    <div>{title}</div>
  )
}

export default Title