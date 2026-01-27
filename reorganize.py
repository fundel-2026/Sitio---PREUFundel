# Script para reorganizar secciones en index.html

# Leer el archivo
with open(r'c:\Users\FUNDEL\OneD drive\Documentos\Escritorio\Sitio - PREUFundel\index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Definir las secciones (índices en base 0)
seccion_mensaje_inst_end = 85  # Línea 86 en editor (86-1=85)
seccion_proceso_start = 86  # Línea 87 en editor (87-1=86)
seccion_proceso_end = 236  # Línea 237 en editor
seccion_metodologia_start = 238  # Línea 239 en editor
seccion_calculadora_start = 361  # Línea 362 en editor
seccion_calculadora_end = 600  # Línea 601 en editor
seccion_resultados_start = 602  # Línea 603 en editor
seccion_resultados_end = 651  # Línea 652 en editor
seccion_universidades_start = 653  # Línea 654 en editor
seccion_universidades_end = 1117  # Línea 1118 en editor
seccion_ciclos_start = 1120  # Línea 1121 en editor

# Extraer secciones
antes_proceso = lines[:seccion_proceso_start]  # Todo antes de PROCESO (incluye Hero y Mensaje)
seccion_proceso = lines[seccion_proceso_start:seccion_proceso_end+1]
seccion_metodologia = lines[seccion_proceso_end+1:seccion_calculadora_start]
seccion_calculadora = lines[seccion_calculadora_start:seccion_calculadora_end+1]
seccion_resultados = lines[seccion_resultados_start:seccion_resultados_end+1]
seccion_universidades = lines[seccion_universidades_start:seccion_universidades_end+1]
desde_ciclos = lines[seccion_ciclos_start:]

# Reorganizar en el nuevo orden
nuevo_contenido = (
    antes_proceso +  # Hero + Mensaje Institucional
    seccion_universidades +  # UNIVERSIDADES (movida arriba)
    ['\n'] +
    seccion_proceso +  # PROCESO DE ACCESO
    ['\n'] +
    seccion_calculadora +  # CALCULADORA (movida después de proceso)
   ['\n'] +
    seccion_metodologia +  # METODOLOGÍA
    seccion_resultados +  # RESULTADOS
    desde_ciclos  # CICLOS y todo lo demás
)

# Guardar el archivo reorganizado
with open(r'c:\Users\FUNDEL\OneDrive\Documentos\Escritorio\Sitio - PREUFundel\index.html', 'w', encoding='utf-8') as f:
    f.writelines(nuevo_contenido)

print("Reorganización completada!")
