const scrollToTop = ({smooth = true}: {smooth?: boolean}) => {
    window.scrollTo({top: 0, behavior: smooth ? 'smooth' : 'instant'});
}

export default scrollToTop;