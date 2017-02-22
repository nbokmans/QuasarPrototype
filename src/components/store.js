export default {
  state: {
    backRoute: '/',
    hash: '',
    icon: '',
    title: 'MyNotion',
    tabs: []
  },
  set(backRoute) {
    this.state.title = this.title || ''
    this.state.hash = this.hash || ''
    this.state.icon = this.icon || ''
    this.state.backRoute = backRoute || ''
    this.state.tabs = this.tabs || []
  }
}