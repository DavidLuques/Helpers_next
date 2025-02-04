import React from 'react'


export const metadata={
    title:"dentro de categoria",
    description:"aca se supone que es la principal page de la tienda",
    keywords:"tienda,online,ecommerce"
}

function TiendaLayout({children}) {
  return (<>
    <nav>
        <h3>Seccion tienda</h3>
        <ul>
            <li>Categoria</li>
            <li>Productos</li>
            
        </ul>
    </nav>
    {children}
    </>
  )
}

export default TiendaLayout