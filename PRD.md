# Product Requirements Document (PRD)
## Traductor BYF - Traductor Médico Andino

**Versión:** 1.0  
**Fecha:** Diciembre 2024  
**Autor:** Equipo de Desarrollo BYF  
**Estado del Proyecto:** En Desarrollo - Fase 1 (Frontend Completado)

---

## 1. Visión del Producto

### 1.1 Descripción General
Traductor BYF es una aplicación web diseñada para facilitar la comunicación entre personal médico hospitalario y pacientes que hablan idiomas indígenas andinos (Aymara y Quechua). El sistema utiliza tecnologías de inteligencia artificial avanzadas, específicamente RAG (Retrieval-Augmented Generation) y Embeddings, para proporcionar traducciones precisas y contextualizadas en el ámbito médico.

### 1.2 Propósito
Resolver la barrera lingüística en entornos hospitalarios donde el personal médico necesita comunicarse efectivamente con pacientes que hablan Aymara o Quechua como idioma principal, mejorando la calidad de atención y reduciendo malentendidos que pueden afectar el diagnóstico y tratamiento.

### 1.3 Público Objetivo
- **Usuarios Primarios:** Personal médico y de enfermería en hospitales de regiones andinas
- **Usuarios Secundarios:** Administradores hospitalarios, intérpretes médicos, pacientes y familiares

---

## 2. Objetivos del Producto

### 2.1 Objetivos Principales
1. Proporcionar traducciones precisas y contextualizadas de castellano a Aymara y Quechua (y viceversa)
2. Facilitar la comunicación médico-paciente en tiempo real
3. Ofrecer una interfaz intuitiva y accesible para uso en entornos hospitalarios
4. Integrar funcionalidades de texto a voz para mejorar la comprensión auditiva

### 2.2 Objetivos Técnicos
1. Implementar arquitectura RAG con embeddings para traducciones contextualizadas
2. Integrar modelo de lenguaje Llama 3.2 mediante Ollama
3. Desarrollar frontend responsive y accesible
4. Garantizar tiempos de respuesta inferiores a 3 segundos

### 2.3 Métricas de Éxito
- Precisión de traducción: >85% en contexto médico
- Tiempo de respuesta promedio: <3 segundos
- Tasa de adopción: >70% del personal médico objetivo
- Satisfacción del usuario: >4.0/5.0

---

## 3. Alcance del Proyecto

### 3.1 Alcance Actual (Fase 1 - Completado)

#### 3.1.1 Frontend
- ✅ Interfaz de usuario completa y funcional
- ✅ Sistema de traducción bidireccional (ES ↔ Nativo)
- ✅ Soporte para dos idiomas indígenas (Aymara y Quechua)
- ✅ Entrada de texto mediante teclado
- ✅ Entrada de voz mediante Web Speech API
- ✅ Visualización de texto traducido
- ✅ Funcionalidad de copiar al portapapeles
- ✅ Sistema de tema claro/oscuro
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Componentes UI accesibles (Radix UI)
- ✅ Sistema de notificaciones (Toast)
- ✅ Integración con Vercel Analytics

#### 3.1.2 Funcionalidades Mock Implementadas
- Simulación de API de traducción (respuestas mock)
- Simulación de generación de audio (text-to-speech mock)
- Validación de campos de entrada
- Manejo de estados de carga

### 3.2 Alcance Pendiente (Fase 2 - En Planificación)

#### 3.2.1 Backend
- ⏳ API REST para traducciones
- ⏳ Integración con Ollama y Llama 3.2
- ⏳ Sistema RAG con base de conocimiento médica
- ⏳ Generación de embeddings para búsqueda semántica
- ⏳ Base de datos vectorial para almacenamiento de embeddings
- ⏳ API de text-to-speech para idiomas indígenas
- ⏳ Sistema de caché para traducciones frecuentes
- ⏳ Logging y monitoreo de traducciones

#### 3.2.2 Funcionalidades Adicionales
- ⏳ Historial de traducciones
- ⏳ Favoritos/frases guardadas
- ⏳ Exportación de traducciones (PDF, texto)
- ⏳ Modo offline básico
- ⏳ Personalización de vocabulario médico
- ⏳ Sistema de feedback para mejorar traducciones

---

## 4. Requerimientos Funcionales

### 4.1 Requerimientos Implementados

#### RF-001: Interfaz de Traducción
**Prioridad:** Alta  
**Estado:** ✅ Completado

**Descripción:** El sistema debe permitir al usuario ingresar texto en español o en idioma indígena y obtener la traducción correspondiente.

**Criterios de Aceptación:**
- El usuario puede seleccionar la dirección de traducción (ES → Nativo o Nativo → ES)
- El usuario puede seleccionar el idioma objetivo (Aymara o Quechua)
- El sistema valida que el campo de entrada no esté vacío
- El sistema muestra un estado de carga durante la traducción
- El sistema muestra el resultado de la traducción de forma clara

#### RF-002: Entrada de Texto
**Prioridad:** Alta  
**Estado:** ✅ Completado

**Descripción:** El sistema debe permitir ingresar texto mediante teclado o voz.

**Criterios de Aceptación:**
- El usuario puede escribir texto en un área de texto
- El usuario puede usar entrada por voz mediante Web Speech API
- El sistema indica visualmente cuando está escuchando
- El sistema muestra el texto reconocido en el campo de entrada

#### RF-003: Visualización de Resultados
**Prioridad:** Alta  
**Estado:** ✅ Completado

**Descripción:** El sistema debe mostrar la traducción de forma clara y accesible.

**Criterios de Aceptación:**
- El texto traducido se muestra en un área destacada
- El texto traducido tiene tamaño de fuente legible
- Términos médicos se resaltan visualmente
- El usuario puede copiar el texto traducido

#### RF-004: Reproducción de Audio
**Prioridad:** Media  
**Estado:** ⚠️ Mock Implementado

**Descripción:** El sistema debe permitir reproducir la traducción en audio.

**Criterios de Aceptación:**
- El usuario puede hacer clic en un botón para reproducir audio
- El audio se genera para el idioma traducido
- El audio se reproduce correctamente en el navegador

**Nota:** Actualmente implementado con datos mock. Requiere integración con API de text-to-speech.

#### RF-005: Interfaz Responsive
**Prioridad:** Alta  
**Estado:** ✅ Completado

**Descripción:** El sistema debe funcionar correctamente en diferentes tamaños de pantalla.

**Criterios de Aceptación:**
- La interfaz se adapta a móviles, tablets y desktop
- Los elementos son accesibles y usables en pantallas pequeñas
- La navegación funciona correctamente en todos los dispositivos

#### RF-006: Tema Claro/Oscuro
**Prioridad:** Media  
**Estado:** ✅ Completado

**Descripción:** El sistema debe permitir alternar entre tema claro y oscuro.

**Criterios de Aceptación:**
- El usuario puede cambiar el tema mediante un botón
- La preferencia se guarda en localStorage
- El tema se aplica consistentemente en toda la aplicación

### 4.2 Requerimientos Pendientes

#### RF-007: API de Traducción con RAG
**Prioridad:** Crítica  
**Estado:** ⏳ Pendiente

**Descripción:** El sistema debe utilizar RAG y embeddings para generar traducciones precisas y contextualizadas.

**Criterios de Aceptación:**
- El backend integra Ollama con modelo Llama 3.2
- El sistema genera embeddings para consultas y documentos
- El sistema recupera contexto relevante de base de conocimiento médica
- Las traducciones son contextualizadas según el dominio médico
- El tiempo de respuesta es <3 segundos

#### RF-008: Base de Conocimiento Médica
**Prioridad:** Crítica  
**Estado:** ⏳ Pendiente

**Descripción:** El sistema debe tener una base de conocimiento con frases y términos médicos en los tres idiomas.

**Criterios de Aceptación:**
- La base de conocimiento contiene frases médicas comunes
- Los términos médicos están correctamente traducidos
- El sistema puede buscar y recuperar información relevante
- La base de conocimiento es actualizable

#### RF-009: Text-to-Speech Real
**Prioridad:** Media  
**Estado:** ⏳ Pendiente

**Descripción:** El sistema debe generar audio real para Aymara y Quechua.

**Criterios de Aceptación:**
- El audio se genera mediante API de text-to-speech
- El audio es claro y comprensible
- El audio respeta la pronunciación correcta de los idiomas
- El audio se genera en tiempo razonable (<5 segundos)

#### RF-010: Historial de Traducciones
**Prioridad:** Baja  
**Estado:** ⏳ Pendiente

**Descripción:** El sistema debe guardar el historial de traducciones del usuario.

**Criterios de Aceptación:**
- El usuario puede ver traducciones anteriores
- El usuario puede buscar en el historial
- El historial se guarda localmente o en servidor
- El usuario puede eliminar entradas del historial

---

## 5. Requerimientos No Funcionales

### 5.1 Rendimiento
- **Tiempo de respuesta de traducción:** <3 segundos (objetivo)
- **Tiempo de carga inicial:** <2 segundos
- **Tamaño del bundle:** Optimizado para carga rápida
- **Uso de memoria:** Eficiente en dispositivos móviles

### 5.2 Usabilidad
- **Accesibilidad:** Cumplimiento WCAG 2.1 AA
- **Interfaz intuitiva:** Curva de aprendizaje <5 minutos
- **Feedback visual:** Indicadores claros de estado
- **Mensajes de error:** Claros y accionables

### 5.3 Seguridad
- **Datos sensibles:** No se almacenan datos médicos sensibles
- **Comunicación:** HTTPS en producción
- **Validación:** Validación de entrada en frontend y backend
- **Rate limiting:** Protección contra abuso de API

### 5.4 Compatibilidad
- **Navegadores:** Chrome, Firefox, Safari, Edge (últimas 2 versiones)
- **Dispositivos:** Móviles, tablets, desktop
- **Sistemas operativos:** Windows, macOS, Linux, iOS, Android

### 5.5 Escalabilidad
- **Concurrencia:** Soporte para múltiples usuarios simultáneos
- **Caché:** Sistema de caché para traducciones frecuentes
- **Infraestructura:** Preparado para escalamiento horizontal

---

## 6. Arquitectura Técnica

### 6.1 Stack Tecnológico

#### Frontend
- **Framework:** Next.js 16.0.10
- **Lenguaje:** TypeScript 5.x
- **UI Library:** React 19.2.0
- **Estilos:** Tailwind CSS 4.1.9
- **Componentes UI:** Radix UI
- **Gestión de Estado:** React Hooks (useState, useEffect)
- **Formularios:** React Hook Form 7.60.0
- **Validación:** Zod 3.25.76
- **Iconos:** Lucide React 0.454.0
- **Analytics:** Vercel Analytics 1.3.1
- **Gestor de Paquetes:** pnpm

#### Backend (Planificado)
- **Framework:** Por definir (FastAPI, Flask, o Express.js)
- **Modelo de IA:** Llama 3.2 via Ollama
- **RAG:** Implementación personalizada
- **Embeddings:** Modelo de embeddings (por definir)
- **Base de Datos Vectorial:** ChromaDB, Pinecone, o FAISS
- **Base de Datos:** PostgreSQL o MongoDB (para metadatos)
- **Text-to-Speech:** API de TTS para idiomas indígenas

### 6.2 Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js)                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Componentes│  │   Páginas    │  │   Hooks      │  │
│  │      UI      │  │   (App Router)│  │   Custom     │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                          │
                          │ HTTP/REST API
                          ▼
┌─────────────────────────────────────────────────────────┐
│                    BACKEND API                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Endpoints  │  │   RAG Engine │  │   Embeddings │  │
│  │   REST       │  │              │  │   Generator  │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Ollama     │  │   Vector DB  │  │   TTS API    │
│  (Llama 3.2) │  │  (Embeddings)│  │   (Audio)    │
└──────────────┘  └──────────────┘  └──────────────┘
```

### 6.3 Flujo de Traducción (Planificado)

1. **Usuario ingresa texto** → Frontend valida entrada
2. **Frontend envía request** → Backend API recibe texto
3. **Backend genera embedding** → Del texto de entrada
4. **Búsqueda vectorial** → Encuentra contexto relevante en base de conocimiento
5. **Construcción de prompt** → Combina texto + contexto recuperado
6. **Llama 3.2 procesa** → Genera traducción contextualizada
7. **Backend genera audio** → Text-to-speech API
8. **Respuesta al frontend** → Texto traducido + URL de audio
9. **Frontend muestra resultado** → Usuario ve y escucha traducción

---

## 7. Componentes del Sistema

### 7.1 Componentes Frontend Implementados

#### 7.1.1 Página Principal (`app/page.tsx`)
- Gestión de estado de traducción
- Coordinación entre componentes
- Lógica de traducción mock
- Manejo de errores y notificaciones

#### 7.1.2 Componentes de UI
- **Header** (`components/header.tsx`): Navegación y toggle de tema
- **TranslationInput** (`components/translation-input.tsx`): Entrada de texto y voz
- **TranslationOutput** (`components/translation-output.tsx`): Visualización de resultados
- **QuickActions** (`components/quick-actions.tsx`): Acciones rápidas (copiar, limpiar)
- **Footer** (`components/footer.tsx`): Pie de página
- **ThemeProvider** (`components/theme-provider.tsx`): Gestión de temas

#### 7.1.3 Componentes UI Base (Radix UI)
- Biblioteca completa de componentes accesibles
- Button, Input, Textarea, Dialog, Toast, etc.
- Más de 40 componentes disponibles

### 7.2 Componentes Backend (Planificados)

#### 7.2.1 API Endpoints
- `POST /api/translate` - Endpoint principal de traducción
- `POST /api/audio` - Generación de audio
- `GET /api/health` - Health check
- `GET /api/history` - Historial de traducciones (futuro)

#### 7.2.2 Servicios
- **TranslationService:** Lógica de traducción con RAG
- **EmbeddingService:** Generación de embeddings
- **RAGService:** Recuperación de contexto relevante
- **TTSService:** Generación de audio
- **CacheService:** Caché de traducciones frecuentes

---

## 8. Diseño de Interfaz

### 8.1 Principios de Diseño
- **Simplicidad:** Interfaz limpia y sin distracciones
- **Accesibilidad:** Cumplimiento de estándares WCAG
- **Responsive:** Adaptable a todos los dispositivos
- **Consistencia:** Diseño coherente en toda la aplicación

### 8.2 Paleta de Colores
- Sistema de temas claro/oscuro
- Colores primarios y secundarios configurables
- Contraste adecuado para accesibilidad

### 8.3 Componentes Visuales
- **Header:** Logo, título, toggle de tema
- **Selector de dirección:** Botones para ES→Nativo / Nativo→ES
- **Selector de idioma:** Dropdown para Aymara/Quechua
- **Área de entrada:** Textarea con botón de voz
- **Área de salida:** Card destacada con texto traducido
- **Botones de acción:** Reproducir audio, copiar, limpiar
- **Footer:** Información del desarrollador

---

## 9. Casos de Uso

### 9.1 Caso de Uso Principal: Traducción Médica

**Actor:** Personal médico  
**Precondición:** El usuario tiene acceso a la aplicación web

**Flujo Principal:**
1. El usuario abre la aplicación
2. El usuario selecciona dirección de traducción (ES → Aymara)
3. El usuario selecciona idioma objetivo (Aymara)
4. El usuario ingresa texto médico en español (ej: "El paciente debe tomar este medicamento tres veces al día")
5. El usuario hace clic en "Traducir"
6. El sistema muestra la traducción en Aymara
7. El usuario puede reproducir el audio de la traducción
8. El usuario puede copiar el texto traducido

**Flujos Alternativos:**
- **3a.** El usuario usa entrada por voz en lugar de teclado
- **5a.** El campo está vacío → Sistema muestra error
- **6a.** Error en traducción → Sistema muestra mensaje de error

### 9.2 Caso de Uso: Traducción Inversa

**Actor:** Personal médico  
**Precondición:** El usuario tiene acceso a la aplicación web

**Flujo Principal:**
1. El usuario selecciona dirección (Nativo → ES)
2. El usuario selecciona idioma origen (Quechua)
3. El usuario ingresa texto en Quechua
4. El sistema traduce a español
5. El usuario puede usar la traducción para entender al paciente

---

## 10. Roadmap y Fases de Desarrollo

### Fase 1: Frontend (✅ Completado)
- [x] Configuración de proyecto Next.js
- [x] Diseño de interfaz de usuario
- [x] Implementación de componentes
- [x] Integración de entrada de voz
- [x] Sistema de temas
- [x] Funcionalidad mock de traducción
- [x] Testing de interfaz

### Fase 2: Backend Core (⏳ En Planificación)
- [ ] Configuración de servidor backend
- [ ] Integración con Ollama
- [ ] Implementación de sistema RAG básico
- [ ] Generación de embeddings
- [ ] Base de datos vectorial
- [ ] API REST endpoints
- [ ] Integración frontend-backend

### Fase 3: Base de Conocimiento (⏳ Pendiente)
- [ ] Recopilación de frases médicas
- [ ] Creación de corpus en tres idiomas
- [ ] Generación de embeddings para corpus
- [ ] Indexación en base de datos vectorial
- [ ] Validación de traducciones

### Fase 4: Text-to-Speech (⏳ Pendiente)
- [ ] Investigación de APIs de TTS para Aymara/Quechua
- [ ] Integración de API de TTS
- [ ] Optimización de generación de audio
- [ ] Caché de audio generado

### Fase 5: Funcionalidades Avanzadas (⏳ Pendiente)
- [ ] Historial de traducciones
- [ ] Favoritos/frases guardadas
- [ ] Exportación de traducciones
- [ ] Sistema de feedback
- [ ] Analytics avanzado

### Fase 6: Optimización y Producción (⏳ Pendiente)
- [ ] Optimización de rendimiento
- [ ] Testing completo
- [ ] Documentación de usuario
- [ ] Despliegue en producción
- [ ] Monitoreo y logging

---

## 11. Riesgos y Mitigaciones

### 11.1 Riesgos Técnicos

| Riesgo | Impacto | Probabilidad | Mitigación |
|--------|---------|--------------|------------|
| Modelo Llama 3.2 no disponible | Alto | Media | Considerar alternativas (GPT, Claude) |
| Calidad de traducción insuficiente | Alto | Media | Mejorar base de conocimiento, fine-tuning |
| TTS no disponible para idiomas | Medio | Alta | Usar síntesis básica o grabaciones |
| Latencia alta en traducciones | Medio | Media | Implementar caché, optimizar RAG |
| Escalabilidad de base vectorial | Medio | Baja | Usar servicio gestionado (Pinecone) |

### 11.2 Riesgos de Negocio

| Riesgo | Impacto | Probabilidad | Mitigación |
|--------|---------|--------------|------------|
| Baja adopción por personal médico | Alto | Media | Capacitación, diseño intuitivo |
| Errores en traducciones médicas | Crítico | Baja | Validación con expertos, disclaimer |
| Falta de recursos para mantenimiento | Medio | Media | Documentación completa, código limpio |

---

## 12. Métricas y KPIs

### 12.1 Métricas Técnicas
- **Tiempo de respuesta promedio:** <3 segundos
- **Tasa de error:** <5%
- **Uptime:** >99%
- **Tiempo de carga de página:** <2 segundos

### 12.2 Métricas de Uso
- **Traducciones por día:** Objetivo inicial: 100+
- **Usuarios activos:** Objetivo: 50+ en primer mes
- **Tasa de retención:** >60% después de primera semana
- **Traducciones por usuario:** >5 por sesión

### 12.3 Métricas de Calidad
- **Precisión de traducción:** >85% (validación manual)
- **Satisfacción del usuario:** >4.0/5.0
- **Tasa de errores reportados:** <10%

---

## 13. Consideraciones Éticas y Legales

### 13.1 Privacidad
- No se almacenan datos médicos sensibles de pacientes
- Las traducciones pueden ser almacenadas localmente (opcional)
- Cumplimiento con regulaciones de privacidad de datos

### 13.2 Precisión Médica
- **Disclaimer:** Las traducciones son asistidas por IA y deben ser validadas
- El sistema es una herramienta de apoyo, no reemplaza a intérpretes humanos
- Se recomienda validación con expertos en casos críticos

### 13.3 Accesibilidad
- Cumplimiento de estándares WCAG 2.1 AA
- Soporte para lectores de pantalla
- Contraste adecuado en todos los elementos

---

## 14. Dependencias y Limitaciones

### 14.1 Dependencias Técnicas
- **Ollama:** Requiere instalación y configuración local o remota
- **Modelo Llama 3.2:** Requiere recursos computacionales adecuados
- **APIs de TTS:** Dependencia de servicios externos para audio
- **Base de datos vectorial:** Requiere servicio o infraestructura

### 14.2 Limitaciones Conocidas
- Traducciones actualmente son mock (no funcionales)
- Audio es simulado (no generado realmente)
- No hay persistencia de datos (sin backend)
- No hay validación de traducciones con expertos
- Base de conocimiento médica aún no implementada

---

## 15. Glosario

- **RAG (Retrieval-Augmented Generation):** Técnica que combina recuperación de información con generación de texto
- **Embeddings:** Representaciones vectoriales de texto que capturan significado semántico
- **Base de Datos Vectorial:** Base de datos optimizada para búsqueda por similitud vectorial
- **Ollama:** Herramienta para ejecutar modelos de lenguaje localmente
- **Llama 3.2:** Modelo de lenguaje de Meta optimizado para tareas de lenguaje
- **Text-to-Speech (TTS):** Tecnología que convierte texto en audio hablado

---

## 16. Referencias y Recursos

### 16.1 Documentación Técnica
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Ollama Documentation](https://ollama.ai/docs)
- [RAG Papers and Resources](https://arxiv.org/abs/2005.11401)

### 16.2 Recursos de Idiomas
- Diccionarios Aymara-Español
- Diccionarios Quechua-Español
- Recursos médicos en idiomas indígenas

---

## 17. Historial de Versiones

| Versión | Fecha | Cambios | Autor |
|---------|-------|---------|-------|
| 1.0 | Diciembre 2024 | PRD inicial - Documentación del estado actual del proyecto | Equipo BYF |

---

## 18. Aprobaciones

**Elaborado por:** Equipo de Desarrollo BYF  
**Revisado por:** [Pendiente]  
**Aprobado por:** [Pendiente]  
**Fecha de Aprobación:** [Pendiente]

---

**Nota Final:** Este PRD documenta el estado actual del proyecto Traductor BYF. El frontend está completamente implementado con funcionalidad mock, mientras que el backend está en fase de planificación. Este documento servirá como guía para el desarrollo de las siguientes fases del proyecto.

