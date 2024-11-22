const express = require('express');
const router = express.Router();
const Estudiante = require('../models/estudiante'); 
const Cupof = require('../models/cupof');
const Curso = require('../models/cursos');
const Materia = require('../models/materias');
const Orientacion = require('../models/orientaciones');
const Personal = require('../models/personal');
const PersonalAsigCargo = require('../models/personal_asig_cargo');
const PersonalCargo = require('../models/personal_cargos');
const Revista = require('../models/revista');
const AsignacionesAlumnos = require('../models/AsignacionesAlumnos');
const CicloSuperior = require('../models/CicloSuperior');
const CursosCicloLectivo = require('../models/cursosciclolectivo');
const Grupo = require('../models/grupos');

// Endpoint para Cursos Ciclo Lectivo
router.get('/cursosciclolectivo', async (req, res) => {
  try {
    const cursosCicloLectivoData = await CursosCicloLectivo.findAll();
    res.json(cursosCicloLectivoData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de cursos ciclo lectivo' });
  }
});

// Endpoint para Grupos
router.get('/grupos', async (req, res) => {
  try {
    const gruposData = await Grupo.findAll();
    res.json(gruposData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de grupos' });
  }
});

// Endpoint para Asignaciones de Alumnos
router.get('/asignacionesalumnos', async (req, res) => {
  try {
    const asignacionesAlumnosData = await AsignacionesAlumnos.findAll();
    res.json(asignacionesAlumnosData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de asignaciones de alumnos' });
  }
});

// Endpoint para Ciclo Superior
router.get('/ciclosuperior', async (req, res) => {
  try {
    const cicloSuperiorData = await CicloSuperior.findAll();
    res.json(cicloSuperiorData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de ciclo superior' });
  }
});

// Endpoints para Orientaciones
router.get('/orientaciones', async (req, res) => {
  try {
    const orientacionesData = await Orientacion.findAll();
    res.json(orientacionesData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de orientaciones' });
  }
});

// Endpoints para Personal
router.get('/personal', async (req, res) => {
  try {
    const personalData = await Personal.findAll();
    res.json(personalData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de personal' });
  }
});

// Endpoints para Personal Asig Cargo
router.get('/personal_asig_cargo', async (req, res) => {
  try {
    const personalAsigCargoData = await PersonalAsigCargo.findAll();
    res.json(personalAsigCargoData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de personal_asig_cargo' });
  }
});

// Endpoints para Personal Cargos
router.get('/personal_cargos', async (req, res) => {
  try {
    const personalCargosData = await PersonalCargo.findAll();
    res.json(personalCargosData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de personal_cargos' });
  }
});

// Endpoints para Revista
router.get('/revista', async (req, res) => {
  try {
    const revistaData = await Revista.findAll();
    res.json(revistaData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de revista' });
  }
});

// Endpoints para cupof
router.get('/cupof', async (req, res) => {
  try {
    const cupofData = await Cupof.findAll();
    res.json(cupofData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de cupof' });
  }
});

// Endpoints para Cursos
router.get('/cursos', async (req, res) => {
  try {
    const cursosData = await Curso.findAll();
    res.json(cursosData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de cursos' });
  }
});

// Endpoints para Materias
router.get('/materias', async (req, res) => {
  try {
    const materiasData = await Materia.findAll();
    res.json(materiasData);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los datos de materias' });
  }
});

// Endpoints para Estudiantes
router.get('/estudiantes', async (req, res) => {
  try {
    const estudiantes = await Estudiante.findAll();
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener estudiantes' });
  }
});

module.exports = router;