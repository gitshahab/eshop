import "./Footer.css";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='footer'>
      <p>©️{date} eshop. All Right Reserved.</p>
    </div>
  )
}
