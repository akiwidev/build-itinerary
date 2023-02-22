type MenuDetailsProps = {
    selectedItem: string
}

const MenuDetails = (props: MenuDetailsProps) => {
    return (
        <div className="grow p-4 bg-slate-50 opacity-90 rounded">{props.selectedItem}</div>
    )
}

export { MenuDetails }