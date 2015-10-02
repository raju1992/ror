class AjaxcallprocessController < ApplicationController
  def home

    @data=Eventinfo.all
    respond_to do |t|
      t.html
      t.json {render json: @data}
      end
  end

  def about
  end

  def contact
  end
end
