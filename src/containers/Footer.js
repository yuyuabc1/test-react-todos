import React from 'react'
import { VisibilityFilters } from '../actions'
import FilterLink from '../components/FilterLink'

const Footer = () => (
    <div>
        <span>展示：</span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>全部</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>未完成</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>已完成</FilterLink>
    </div>
)

export default Footer