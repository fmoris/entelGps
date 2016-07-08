'use strict';

angular.module('rsliteapp')
    .controller('clientsRoutesCtrl', function ($scope, $state) {
        $scope.titulo= 'Control de Rutas y Clientes';
        $scope.menu = [
            {
                titulo: 'Administración de Grupo de Geocercas',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Permite Administrar los Grupos de Geocercas',
                link: 'clientsRoutes.geocercasAdminGroup'
            },
            {
                titulo: 'Administración de Geocercas',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Permite Administrar Geocercas',
                link: 'clientsRoutes.geocercasAdmin'
            },
            {
                titulo: 'Administración de Rutas y Asignaciones',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Permite Crear Manualmente y Asignarlos así como tambien o eliminar rutas que no tiengan clientes visitados',
                link: 'clientsRoutes.routesAsignAdmin'
            },
            {
                titulo: 'Carga Masiva',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'permite Ingresar en Forma Masiva la Creación o Eliminación de Rutas o Choferes',
                link: 'clientsRoutes.masiveCharge'
            },
            {
                titulo: 'Control de Rutas',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Muestra un Estado Actual de las Rutas en Curso',
                link: 'clientsRoutes.routeControl'
            },
            {
                titulo: 'Informe de Excesos por Zona',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Informe de Excesos de Velocidad en Zonas',
                link: 'clientsRoutes.excessZone'
            },
            {
                titulo: 'Reporte de Clientes',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Reporte de Tiempos que los Vehículos Generan entre Clientes de su Empresa',
                link: 'clientsRoutes.clientReports'
            },
            {
                titulo: 'Informe de Estadia en Planta',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Informe de Tiempos de Detención en Zonas de Tipo Planta',
                link: 'clientsRoutes.plantStay'
            },
            {
                titulo: 'Informe de Estadias en Clientes',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Informe de Tiempos de Detención en Zonas de Tipo Cliente',
                link: 'clientsRoutes.clientStay'
            },
            {
                titulo: 'Reporte de Calidad de Servicio',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Reporte de Calidad de Servicio',
                link: 'clientsRoutes.qualityService'
            },
            {            
                titulo: 'Administración de Notificados por Incumplimiento de Ruta',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Permite Modificar los Grupos que Seran Notificados por Incumplimiento de Ruta',
                link: 'clientsRoutes.notifyBreachRoute'
            },
            {
                titulo: 'Administración de Notificados por Rutas Incumplidas',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Permite Obtener un Informe de Notificaciones por Rutas Incumplidas',
                link: 'clientsRoutes.informNotifyBreachRoute'
            },
            {
                titulo: 'Informe HRE (Hoja de Rutas Electronicas)',
                icono: '../../images/icons/control_rutas_clientes.png',
                descripcion: 'Reporte Diario/Mensual HRE(Hoja de Ruta Electronica)',
                link: 'clientsRoutes.hreInform'
            }
        ];   
});
