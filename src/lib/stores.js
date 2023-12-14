import { writable } from 'svelte/store'

export const userStore = writable('Hello')
export const dashboardSidebar = writable(false)
export const dashboardSidebarCollapsed = writable(false)
