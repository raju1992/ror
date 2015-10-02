

task :extract => :environment do

  require 'nokogiri'
  require 'open-uri'

  doc=Nokogiri::HTML(open("https://mlh.io/seasons/f2015/events"))

  got=doc.css("div.inner")
  got.each do |t|
    name=t.css("h3").text
    date=t.css("p").first.text
    location=t.css("p").last.text

    eventcreate=Eventinfo.create(name:name,datesofevent:date,location:location)


  end
end
