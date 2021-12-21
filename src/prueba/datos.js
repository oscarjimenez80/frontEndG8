import estudiantes from "../data/ejemplo";

export const getEstudianteById = (id) => estudiantes.find((estudiante) => estudiante.id === id);