const TeacherItem = ({
    teacherName,
    teacherEmail,
    teacherPhone
}) => {
    return (
        <div className="
            border-round-lg
            p-2
            surface-300
            w-full
        ">
            <h3>{teacherName}</h3>
            <section className="flex flex-row gap-4">
                <div className="flex flex-column gap-1">
                    <span>{teacherEmail}</span>
                    <span>{teacherPhone}</span>
                </div>
                <div className="flex flex-column gap-1">
                    <i className="pi pi-pencil"/>
                    <i className="pi pi-trash text-red-400"/>
                </div>
            </section>
        </div>
    );
};

export default TeacherItem;