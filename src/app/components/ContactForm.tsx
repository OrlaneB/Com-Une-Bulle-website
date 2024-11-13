import React from 'react'

type Props = {}

export default function ContactForm({}: Props) {
  return (
    <form>
        <input type='text' name='name'/>
        <input type="email" name='mail'/>
        <input />
        <textarea name='message'/>
    </form>
  )
}