export default function SomeVar({ someVar })  {
  return (
    <html>
      <body>
        Variable: {someVar}
      </body>
    </html>
  )
}

export async function getServerSideProps(context) {
  console.log('******* CONTEXT IN SSP ******', context)
  return {
    props: {
      someVar: context.params.someVar
    }
  }
}
