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
  return {
    props: {
      someVar: context.params.someVar
    }
  }
}
