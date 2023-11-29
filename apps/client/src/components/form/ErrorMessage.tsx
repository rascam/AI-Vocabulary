function ErrorMessage({text}: {text: string}) {
  return (
    <div className="errorMessage">
      <span className="text-red-600 text-sm">{text}</span>
    </div>
  )
}

export default ErrorMessage