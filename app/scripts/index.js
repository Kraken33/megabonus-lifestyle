import './../styles/main.scss'
import Til from '../assets/script'
import ButtonBubble from './button-bubble'
import Partners from './slider'
import Loader from './loader'
import Modal from './modal'
import ScrollTo from './scrollTo'

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}
Til()
ButtonBubble()
Partners()
Modal()
ScrollTo()
document.body.onload = () => {
  setTimeout(() => {
    Loader()
  }, 2000)
}
