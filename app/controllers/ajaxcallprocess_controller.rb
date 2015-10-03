class AjaxcallprocessController < ApplicationController
  def home

    @data=Eventinfo.all
    respond_to do |t|
      t.html
      t.json {render json: @data}
    end
    @hash = Gmaps4rails.build_markers(@users) do |user, marker|
      marker.lat user.latitude
      marker.lng user.longitude
      marker.infowindow user.description
      marker.picture({
                         "url"=> "https://addons.cdn.mozilla.net/img/uploads/addon_icons/13/13028-64.png",
                         "width" => 32,
                         "height" =>32
                     })
      marker.json({title: user.title})

    end
  end

  def about
  end

  def contact
  end
end
