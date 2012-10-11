require 'sinatra'

set :public_folder, Dir.getwd

get '/' do
  redirect to("examples/index.html")
end