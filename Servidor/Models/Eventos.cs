namespace Servidor.Models;

public class Eventos{

    public int Id {get;set;}
    public String TituloEvento{get;set;}=string.Empty;
    public int Ubicacion{get;set;}
    public String Detalles{get;set;}=string.Empty;
    public String Fecha{get;set;}=string.Empty;
    public String Hora{get;set;}=string.Empty;
     public String Estado{get;set;}=string.Empty;
      public String Imagen{get;set;}=string.Empty;
      public string Link{get;set;}=string.Empty;
    

public Eventos(){

}

public Eventos(int id,string titulo, int ubicacion, string detalles, string fecha, string hora, string estado, string imagen, string link){
    this.Id=id;

  this.TituloEvento=titulo;
  this.Ubicacion=ubicacion;
  this.Detalles=detalles;
  this.Fecha=fecha;
  this.Hora=hora;
  this.Estado=estado;
  this.Imagen=imagen;
  this.Link=link;

}


}