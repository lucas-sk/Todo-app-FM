import bgDarkMobile from '../../assets/bg-mobile-dark.jpg'

export const Picture = () => {
  return (
    <picture className='absolute z-0'>
      {/* <source media="(min-width: )" srcset=""  /> */}
      <img src={bgDarkMobile} alt="background mobile dark" className='max-w-full'/>
    </picture>
  )
}