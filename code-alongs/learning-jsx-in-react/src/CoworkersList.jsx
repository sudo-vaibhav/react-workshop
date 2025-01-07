function CoworkersList({ coworkers }) {
  return (
    <ul>
      {coworkers.sort().reverse().map((cw) => <li>{cw}</li>)}
    </ul>
  )
}
export default CoworkersList