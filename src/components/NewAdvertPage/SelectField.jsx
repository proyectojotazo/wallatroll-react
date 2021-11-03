import React from 'react'
import { useSelect } from '../../hooks'

import './SelectField.css'

const SelectField = ({ tags, setTags }) => {
  const { tagSelected, handleTags, tagsOp } = useSelect()

  const handleAddTag = e => {
    e.preventDefault()

    setTags(prevTags =>
      tags.includes(tagSelected)
        ? tags.filter(tag => tag !== tagSelected)
        : [...prevTags, tagSelected]
    )
  }

  const addBtnStyle = {
    className: tags.includes(tagSelected) ? 'tags-btn remove' : 'tags-btn add',
    children: tags.includes(tagSelected) ? '-' : '+'
  }

  return (
    <>
      <select
        onChange={handleTags}
        size={tagsOp.length}
        className='tags-wrapper-select'
      >
        {tagsOp.map((tag, i) => (
          <option key={i} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <button {...addBtnStyle} onClick={handleAddTag} />
      <div className='tags-wrapper-list'>
        <ul className='tags-list'>
          <h3 className='tags-list-title'>Tags *</h3>
          {tags.length === 0 && <p>No hay tags</p>}
          {tags.map((tag, i) => (
            <li key={i} className='tags-list-item'>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SelectField
