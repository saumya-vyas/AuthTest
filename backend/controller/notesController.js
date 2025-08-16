export const noteLister = async (req, res) => {
    res.send("all the notes")
}

export const noteGetter = async (req, res) => {
    res.send("this note")
}

export const noteCreator = async (req, res) => {
    res.send("Crate note")
}

export const noteDeletor = async (req, res) => {
    res.send("Delete note")
}

export const noteUpdator = async (req, res) => {
    res.send("Update this note")
}