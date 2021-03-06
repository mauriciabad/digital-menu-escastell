import React from 'react'
import PropTypes from 'prop-types'
import { MenuPostTemplate } from '../../templates/menu-post'

const MenuPostPreview = ({ entry, widgetFor }) => {
  return (
    <MenuPostTemplate
      content={widgetFor('body')}
    />
  )
}

MenuPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MenuPostPreview
