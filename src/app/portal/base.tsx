type Props = {
  title: string
  children: React.ReactNode
  rightAction?: React.ReactNode
}

const PortalBase = ({ title, children, rightAction }: Props) => {
  return (
    <div className="rounded p-2 shadow-lg">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        {rightAction}
      </div>
      {children}
    </div>
  )
}

export default PortalBase
