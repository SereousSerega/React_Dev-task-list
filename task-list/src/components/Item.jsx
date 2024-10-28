import { useRef, useState, useEffect } from "react";

function Item({ title, id, status, date, tasks, setTasks }) {
    const [checked, setChecked] = useState(status)
    const [edit, setEdit] = useState(false)
    const [editText, setEditText] = useState(title || '')
    const classes = ['todo']
    const textareaRef = useRef(null)

    if (checked) {
        classes.push('status')
    }
    if (edit) {
        classes.push('edit')
    }

    const onUpdateStatus = () => {
        setChecked(!checked);
        tasks.map(item => {
            if (item.id === id) {
                item.status = !checked
            }

            return true
        })
        setTasks([...tasks])
    }

    const onEditText = () => {
        tasks.map(item => {
            if (item.id === id) {
                item.title = editText
            }

            return true
        })
        setTasks([...tasks])
    }

    const onRemoveItem = () => {
        setTasks([...tasks.filter(item => item.id !== id)])
    }

    const onEditItem = (e) => {
        setEdit(!edit)
    }

    useEffect(() => {
        if (edit && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [edit]);

    const editItem = (e) => {
        if (e.key === 'Enter' && e.target.value !== '' && edit && !e.shiftKey) {
            console.log('editItem Enter')
            onEditText()
            onEditItem()
        }
    }

    const handleResize = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <li className={classes.join(' ')}>
            <label>
                <input type="checkbox" checked={checked} onChange={onUpdateStatus} />
                <span className="line">{title}</span>
            </label>
            <textarea ref={textareaRef} type="text" className="editItem" value={editText} onChange={(e) => setEditText(e.target.value)} onKeyDown={editItem} onInput={handleResize} onBlur={() => setEdit(false)}  />
            <span className="itemDate">{date}</span>
            <i onClick={onEditItem}>&#128221;</i>
            <i className="material-icons red-text" onClick={onRemoveItem}>X</i>
        </li>
    )
}

export default Item